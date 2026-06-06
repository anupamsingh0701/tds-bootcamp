---
---

--- Before Day-4 ---
I already knew that HTTP was the protocol behind websites and had seen status codes like 404 before, but only vaguely understood what they meant. I had never used `curl` in the terminal or opened Chrome DevTools deliberately to inspect network requests. FastAPI was completely new to me.
---

## Day-4 Checklist

- [x] I know the 5 core HTTP methods (GET, POST, PUT, PATCH, DELETE) and what each is used for
- [x] I can read a status code and know what went wrong — e.g., 401 vs. 403 vs. 404 vs. 500
- [x] I can open Chrome DevTools Network tab, find a request, and inspect its headers, payload, and response
- [x] I can copy a browser request as a cURL command and run it in the terminal
- [x] I can change the `User-Agent` in the browser and see the change in the Network tab
- [x] I can use `curl` to make a GET request with query parameters and a POST request with a JSON body
- [x] I have a running FastAPI app with at least two endpoints (`GET /health` and `POST /echo`)
- [x] I can test my API using the Swagger UI at `/docs` and via `curl` from the terminal

--- After Day-4 ---
I learned these things as well, apart from the checklist ...
The difference between 401 and 403 was something I always confused — now I know 401 means "you're not logged in" and 403 means "you're logged in but not allowed". The Chrome DevTools Network tab is incredibly powerful; I never knew you could right-click any request and get a ready-to-run `curl` command — that alone will save me a lot of time debugging APIs. FastAPI's automatic Swagger UI at `/docs` is genuinely impressive; it means you can test your entire API without writing a single line of frontend code. I also learned that `PUT` replaces the entire resource while `PATCH` only updates specific fields — a subtle but important distinction.
---

--- Feedback (Suggestions for the TDS Team) ---
This is my feedback ...
Day-4 was very practical and immediately useful. The hands-on FastAPI section was the highlight — going from zero to a working API with interactive docs in one session is very motivating. A small suggestion: it would be great to show a real-world example of authentication headers (like `Authorization: Bearer <token>`) when covering HTTP headers, so students understand how APIs are secured in practice. Also, a quick demo of how to handle CORS in FastAPI would be helpful since it's a very common pain point.
---

---
---

You can write your personal notes here; they will not be parsed and are for your own reference.
- GET = read, POST = create, PUT = replace, PATCH = partial update, DELETE = remove
- 200 OK, 201 Created, 400 Bad Request, 401 Unauthorized, 403 Forbidden, 404 Not Found, 500 Server Error
- Chrome DevTools: F12 → Network tab → click a request → Headers / Payload / Response tabs
- Right-click request → Copy → Copy as cURL (bash) to get terminal command
- `curl -X GET "https://api.example.com/data?key=value"` — GET with query params
- `curl -X POST "https://api.example.com/echo" -H "Content-Type: application/json" -d '{"message": "hello"}'`
- FastAPI: `uvicorn main:app --reload` to start; visit `http://127.0.0.1:8000/docs` for Swagger UI
- User-Agent override: DevTools → Network conditions → uncheck "Use browser default"
