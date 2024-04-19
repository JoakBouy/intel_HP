import { LinkTo } from './styles';

const GetStartedButton = ({ padding }: { padding: string }) => {
  return (
    <LinkTo
      style={{
        padding: padding,
      }}
      href="http://localhost:3000/"
      target="_blank"
      rel="noopener noreferrer"
    >
      Visit Blog
    </LinkTo>
  );
};

export default GetStartedButton;