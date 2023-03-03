// @generated by protoc-gen-connect-query v0.1.1 with parameter "target=ts"
// @generated from file example.proto (package buf.connect.demo.example.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { createQueryService } from "@bufbuild/connect-query";
import { MethodKind } from "@bufbuild/protobuf";
import { Empty, Todo, Todos } from "./example_pb.js";

export const typeName = "buf.connect.demo.example.v1.TodoService";

/**
 * A helpful RPC to get all current Todos
 *
 * @generated from rpc buf.connect.demo.example.v1.TodoService.GetTodos
 */
export const getTodos = createQueryService({
  service: {
    methods: {
      getTodos: {
        name: "GetTodos",
        kind: MethodKind.Unary,
        I: Empty,
        O: Todos,
      },
    },
    typeName: "buf.connect.demo.example.v1.TodoService",
  },
}).getTodos;

/**
 * @generated from rpc buf.connect.demo.example.v1.TodoService.AddTodo
 */
export const addTodo = createQueryService({
  service: {
    methods: {
      addTodo: {
        name: "AddTodo",
        kind: MethodKind.Unary,
        I: Todo,
        O: Todos,
      },
    },
    typeName: "buf.connect.demo.example.v1.TodoService",
  },
}).addTodo;
