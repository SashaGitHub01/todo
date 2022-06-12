enum Status {
   FULLFILLED = 'FULLFILLED',
   ACTIVE = 'ACTIVE',
}

export interface Todo {
   value: string,
   status: 'FULLFILLED' | 'ACTIVE',
   id: string
}

export type SortTypes = 'all' | 'fullfiled' | 'active'