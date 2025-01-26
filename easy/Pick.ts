type MyPick<T, K extends keyof T> = {
  [key in K]: T[key];
};

interface Todo {
  title: string;
  description: string;
  completed: boolean;
}

type test = Pick<Todo, "title" | "completed">;
type test2 = MyPick<Todo, "title" | "completed">;
