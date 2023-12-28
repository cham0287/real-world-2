// HTTP 요청 메서드 타입 정의
type HttpMethod = 'GET' | 'POST' | 'DELETE' | 'PUT' | 'UPDATE';

// 공통 Fetch 함수
export async function fetchData<T>(url: string, method: HttpMethod = 'GET', body?: any): Promise<T> {
  try {
    const options: RequestInit = {
      method,
      headers: {
        'Content-Type': 'application/json',
      },
    };

    if (method !== 'GET' && body) {
      options.body = JSON.stringify(body);
    }

    const response = await fetch(url, options);
    if (!response.ok) {
      throw new Error(`데이터를 가져오는 중에 오류가 발생했습니다. 상태 코드: ${response.status}`);
    }
    const data: T = await response.json();
    return data;
  } catch (error) {
    throw new Error(`데이터를 가져오는 중에 오류가 발생했습니다: ${error}`);
  }
}
