export interface Task<TTaskMetadata> {
  id: string;
  catalog: string;
  metadata?: TTaskMetadata;
}
