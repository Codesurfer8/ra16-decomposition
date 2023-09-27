import Widget from './Widget';

function Widgets(props) {
  return (
    <div className='widgets'>
      <Widget title='widget-title'>
        <div className='widget-block'>{props.wid1}</div>
      </Widget>
      <Widget title='widget-title'>
        <div className='widget-block'>{props.wid2}</div>
      </Widget>
      <Widget title='widget-title'>
        <div className='widget-block'>{props.wid3}</div>
      </Widget>
    </div>
  );
}

export default Widgets;
