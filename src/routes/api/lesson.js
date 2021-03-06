import { getLessons } from './_db';

function writeJsonHead(res, statusCode) {
  res.writeHead(statusCode, {
    'Content-Type': 'application/json',
  });
}

export function get(req, res, next) {
  const { id } = req.query;

  writeJsonHead(res, 200);

  if (id) {
    return res.end(JSON.stringify(getLesson(id)));
  }

  return res.end(JSON.stringify(getLessons()));
}
