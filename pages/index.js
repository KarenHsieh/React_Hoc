import React from 'react';
// import CheckBox from './Checkbox';
import HOC from '../component/Hoc';
import List from '../component/List';
import Card from '../component/Cards/Card';
import WideCard from '../component/Cards/WideCard';
import CardHoc from '../component/Cards/Hoc';

const cardData = {
  title: 'Xpark 門票',
  btnText: '購買'
};

const wideCardData = {
  title: '桃園｜Xpark 都會型水生公園門票',
  description: '由日本橫濱八景島首度跨海來台桃園開設分館「Xpark」',
  btnText: '立即搶購'
};

const handleClick = () => {
  console.warn('test hoc');
}

// const Wrapped = HOC(List, data);
const CardWrapped = CardHoc(Card, handleClick);
const WideCardWrapped = CardHoc(WideCard, handleClick);



export default function indexPage() {
  return (
    <div>
      {/* <Wrapped items={data}/> */}
      {/* <CheckBox checked={false} disabled={false} /> */}
      {/* <Card /> */}
      <CardWrapped data={cardData} />
      <WideCardWrapped data={wideCardData} />
    </div>
  )
}