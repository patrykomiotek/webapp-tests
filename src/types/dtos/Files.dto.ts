export interface FileFields {
  name: string;
  description: string;
  type: string;
}

export interface FileDto {
  id: string;
  fields: FileFields;
}

export interface FilesDto {
  records: FileDto[];
}
