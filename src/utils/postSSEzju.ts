// 浙大先生的奇葩格式，真的是笨死了！
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
    buffer = lines.pop()! // 剩余数据留待下次处理

    for (const line of lines) {
      if (line.startsWith('data:')) {
        const lastData = line.lastIndexOf('data:')
        const jsonText = line.slice(lastData + 6).trim()

        try {
          const msg = JSON.parse(jsonText)
          onMessage(msg)
        } catch {
          // 跳过解析失败的内容
        }
      }
    }
  }
}
