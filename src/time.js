import React from 'react';

const Formatter = ()=>{
  if(Intl && Intl.DateTimeFormat) {
    return new Intl.DateTimeFormat(undefined, {
      weekday: 'short',
      month: 'short',
      day: 'numeric',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      timeZoneName: 'short',
    });
  }
  return {
    format: (date)=>{
      return date.toString();
    }
  };
};

const timeFormatter = Formatter();
const dateToHuman = (date)=>{
  return timeFormatter.format(date);
};

class Time extends React.Component {
  render(){
    let k = new Date(this.props.value);
    return <time dateTime={k.toISOString()} title={dateToHuman(k)}>{dateToHuman(k)}</time>;
  }
}

export default Time
