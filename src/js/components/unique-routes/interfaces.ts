import { RouteComponentProps } from 'react-router-dom';

interface IUniqueRoutesProps {
  exact: boolean,
  path: string,
  render(routeProps: RouteComponentProps): React.ReactNode,
}

export { IUniqueRoutesProps };
