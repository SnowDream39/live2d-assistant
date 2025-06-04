export default async function postSSE(
  url: string,
  data: any,
  onMessage: (message: any) => any,
  config?: { headers?: any },
) {
  const response = await fetch(url, {
    method: 'POST',
    headers: config?.headers ?? { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  })

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`)
  }

  const reader = response.body!.getReader()
  const decoder = new TextDecoder('utf-8')
  let buffer = ''

  while (true) {
    const { value, done } = await reader.read()
    if (done) break

    buffer += decoder.decode(value, { stream: true })
    let lines = buffer.split('\n')

    // 如果最后不是空行，则可能是消息未结束，暂不处理
    buffer = lines.pop()!

    for (const line of lines) {
      if (line.startsWith('data: ')) {
        const json = line.slice(6).trim()
        onMessage(JSON.parse(json))
      }
    }
  }
}
