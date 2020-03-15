import { Container, Title, LargeTitle, Description } from './styles';

const Module = props => <Container {...props} />;

Module.LargeTitle = LargeTitle
Module.Title = Title;
Module.Description = Description;

export default Module;
