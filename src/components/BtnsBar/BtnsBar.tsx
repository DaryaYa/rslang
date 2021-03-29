import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { MiniBtn } from '../MiniBtn/MiniBtn';

interface Props {
  items: { _id: number, apiName: string }[],
  showStats(id: number): string;

};


export const BtnsBar = ({ items, showStats }: Props) => {
  const elements = items.map((item: any) => {
    const { _id, apiName } = item;
    return (
      <div key={_id}>
        <MiniBtn
          showStats={showStats}
          _id={_id}
          apiName={apiName}
        />
      </div>
    )
  });
  return (<ButtonGroup size="lg" className="flex-wrap">{elements}</ButtonGroup>);
}
