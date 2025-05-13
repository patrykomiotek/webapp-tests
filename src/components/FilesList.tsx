import { FileDto } from '@apptypes/dtos/Files.dto';
interface Props {
  files: FileDto[];
}

export const FilesList = ({ files }: Props) => {
  return (
    <div>
      {files.map((item) => {
        return (
          // children: string[]
          <div>
            {/* <Link to={`/files/${item.id}`} key={item.id}> */}
            {item.fields.name} - {item.fields.description}
            {/* </Link> */}
          </div>
        );
      })}
    </div>
  );
};
