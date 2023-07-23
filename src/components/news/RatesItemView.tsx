/**
 * Компонент котировки
 */

import { RatesItem } from "./RatesItem"

interface RatesItemView{
  key : number;
  item : RatesItem
}

function RatesItemView(props : RatesItemView) {
  return (
    <div className="rates-item" key={props.key}>
      <div className="rate-title">{props.item.title}</div>
      <div className="rate-value">{props.item.value}</div>
      <div className="rate-delta">{props.item.delta}</div>
    </div>
  );
}

export default RatesItemView