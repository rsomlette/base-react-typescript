export function errorResponse(error: any) {
  return { ok: false, problem: error };
}

export function okResponse(body: any) {
  return { ok: true, data: body };
}
