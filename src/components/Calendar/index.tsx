import React,{useState} from 'react';
import { View,StyleSheet } from 'react-native';
import { Calendar, CalendarList, LocaleConfig } from 'react-native-calendars';
import {format,subWeeks,addWeeks} from 'date-fns';

const ptBR ={
  monthNames:['Janeiro','Fevereiro','Março','Abril','Maio', 'Junho','Julho','Agosto','Setembro','Outubro', 'Novembro', 'Dezembro'],
  monthNamesShort:['Jan','Fev','Mar','Abr','Mai','Jun','Jul','Ago','Set','Out','Nov','Dez'],//nomes abreviados dos meses
  dayNames:['Domingo','Segunda','Terça', 'Quarta','Quinta', 'Sexta', 'Sábado'],
  dayNamesShort:['DOM','SEG','TER','QUA','QUI','SEX','SAB'],// nomes dos dias abreviados
  today:"hoje"
}
LocaleConfig.locales['pt-br']= ptBR;

LocaleConfig.defaultLocale='pt-br'; 

interface MarkedDateProps{
  [date:string]:{
    color?:string;
    textColor?:string;
    disabled?:boolean;
    disableTouchEvent?:boolean;
    selected?:boolean;
    marked?:boolean;
    dotColor?: string;
  }
}
interface Appointment{
  date:string;
}

const getMarkedDates = (baseDate:string, appointments:Appointment[]) => {
  let markedDates:MarkedDateProps = {};

  markedDates[format(new Date(baseDate),'yyyy-MM-dd')] = { selected: true,marked:true,color:'red', };

  appointments.forEach((appointment) => {
    const formattedDate = format(new Date(appointment.date),'yyyy-MM-dd');
    
    markedDates= {
      ...markedDates,
      [formattedDate] :{
        marked: true,
        textColor:'#ebf3ea',
        color:'red',
        dotColor:'blue'
      }
    };
  });
  console.log(markedDates);
  return markedDates;
};

export const Calendario: React.FC = () => {

  const initDate = '2022/02/13';

  const APPOINTMENTS = [
    {
      date: '2022/02/14',
    },
    {
      date: '2022/02/15',
    },
    {
      date: '2022/02/16',
    },
    {
      date: '2022/02/18',
    },
    
  ];

 
  return (
    <View style={styles.container}>
      <Calendar
        style={{
          borderWidth: 1,
          borderColor: 'red',
          height: 350,
          width: 300,
          margin: 10,
        }}
        current={initDate}
        minDate ={format(subWeeks(new Date(initDate), 1),'yyyy-MM-dd')}
        maxDate ={format(addWeeks(new Date(initDate), 1),'yyyy-MM-dd')}
        onDayPress={(day) => {
          console.log('data selecionado', day.dateString);
        }}
        firstDay={1}
        markingType="period"
        markedDates={getMarkedDates(initDate, APPOINTMENTS)}
        theme={{
          calendarBackground: '#fff',
          textSectionTitleColor:'#000',
          textMonthFontWeight: 'bold',
          textDayFontFamily: 'monospace',
          textMonthFontFamily: 'monospace',
          textDayHeaderFontFamily: 'monospace',
          selectedDayTextColor: '#4b053f',
          todayTextColor: '#00adf5',
          selectedDayBackgroundColor: '#ddf500',        
        }}

      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
   backgroundColor:'#7fa723',
   margin : 10,
   justifyContent: 'center',
   alignItems: 'center'
  },
});