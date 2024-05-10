interface ErrorInfo {
  err: boolean;
  status?: number;
  statusText?: string;
}

interface FetchResponse<T> {
  data?: T;
  isPending: boolean;
  Error: ErrorInfo;
}

const getData = async <T>(
  relativeUrl: string,
  info: any,
  method: string
): Promise<FetchResponse<T>> => {
  const baseUrl = "http://localhost:3010/api/v1"; // Establece la URL base
  const url = baseUrl + relativeUrl; // Construye la URL completa

  let data: T | undefined,
    isPending = true,
    Error: ErrorInfo = { err: false };

  try {
    const res = await fetch(url, {
      method,
      mode: "cors",
    });

    const jsonResponse = await (res.ok ? res.json() : Promise.reject(res));

    data = jsonResponse;
    isPending = false;
    Error = { err: false };
  } catch (err) {
    console.log(err);
    isPending = true;
    Error = {
      err: true,
    };
  }

  return { data, isPending, Error };
};

export default getData;
