/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */

// The parent needs to pass the array of todos as props to this component
export function Todos({ todos }) {
  return (
    <div>
      {todos.map((todo) => {
        return (
          <div>
            <h1>{todo.title}</h1>
            <h3>{todo.description}</h3>
            <button
              onClick={() => {
                fetch("http://localhost:3000/completed", {
                  method: "PUT",
                  body: JSON.stringify({
                    id: todo._id,
                  }),
                  headers: {
                    "Content-type": "application/json",
                  },
                }).then(async function (res) {
                  await res.json();
                  alert("Todo Marked DONE");
                });
              }}
            >
              {todo.completed == true ? "Done" : "Mark as Done"}
            </button>
          </div>
        );
      })}
    </div>
  );
}
