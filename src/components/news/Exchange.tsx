/**
* Компонент списка котировок
*/

import { RatesItem } from "./RatesItem"
import  RatesItemView  from "./RatesItemView.tsx"

interface Exchange{
  list : RatesItem[]
}

function Exchange(props : Exchange) {
  const items = props.list.map((item, index) => {
    return(
      <RatesItemView key={index} item={item}/>
    )
  });
  return (
    <div className="exchange-list">{items}</div>
  );
}

export default Exchange