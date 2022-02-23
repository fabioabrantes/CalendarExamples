import React,{useState} from 'react';
import { View,StyleSheet,Text } from 'react-native';
import { Calendar, CalendarProps, LocaleConfig } from 'react-native-calendars';
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

const INITIAL_DATE = '2022-02-02';

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

export const Calendario2: React.FC = () => {
  const [selected, setSelected] = useState(INITIAL_DATE);
  
  const onDayPress: CalendarProps['onDayPress'] = day => {
    setSelected(day.dateString);
  };
  
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Calendário com data selecionável</Text>
        <Calendar
          enableSwipeMonths
          current={INITIAL_DATE}
          style={styles.calendar}
          onDayPress={onDayPress}
          markedDates={{
            [selected]: {
              selected: true,
              disableTouchEvent: true,
              selectedColor: 'orange',
              selectedTextColor: 'red'
            }
          }}
          theme={{
            textSectionTitleColor:'#000',
          }}
          firstDay={1}
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
  text: {
    textAlign: 'center',
    padding: 10,
    backgroundColor: 'lightgrey',
    fontSize: 16
  },
  calendar: {
    marginBottom: 10
  },
});