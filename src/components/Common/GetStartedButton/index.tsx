import { LinkTo } from './styles';

const GetStartedButton = ({ padding }: { padding: string }) => {
  return (
    <LinkTo
      style={{
        padding: padding,
      }}
      href="https://blog.intelhp.com/"
      target="_blank"
      rel="noopener noreferrer"
    >
      Visit Blog
    </LinkTo>
  );
};

export default GetStartedButton;