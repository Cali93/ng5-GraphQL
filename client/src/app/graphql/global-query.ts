/**
 * Server Mutation Query
 */

'use strict';

import gql from 'graphql-tag';

export const addUser = gql`
  mutation addUser($name: String!, $email:String!) {
    addUser(name: $name, email: $email) {
      id
      name
      email
    }
  }`;

export const Users = gql`
  query {
    users{
      id
      name
      email
    }
  }`;

export const removeUser = gql`
  mutation removeUser($id: String!) {
    removeUser(id: $id) {
      id
      name
      email
    }
  }`;

export const updateUser = gql`
  mutation updateUser($id: String!, $name: String!, $email: String!) {
    updateUser(id: $id, name: $name, email: $email) {
      id
      name
      email
    }
  }`;
