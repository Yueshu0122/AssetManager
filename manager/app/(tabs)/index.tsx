import React, { useState } from "react";
import { Pressable, SafeAreaView, ScrollView, Text, View } from "react-native";
import DateTimePicker from '@react-native-community/datetimepicker';
import RecordCard from "@/components/RecordCard";

export default function HomeScreen() {

    const [date, setDate] = useState(new Date());
    const [showDatePicker, setShowDatePicker] = useState(false);
    return (
      <SafeAreaView className="flex-1 flex gap-4 mx-4">
        {/* date */}
        <View className="flex flex-row justify-between">
          <Text className="font-bold">{date.toLocaleDateString()}</Text>
          <Pressable onPress={() => setShowDatePicker(true)}>
            <Text className="text-gray-500">Select Date</Text>
          </Pressable>
        </View>
        {/* date picker */}
        {showDatePicker && (
          // @ts-ignore
          <DateTimePicker
            value={date}
            mode="date"
            display="inline"
            onChange={(_event: any, selectedDate?: Date) => {
              if (selectedDate) {
                setDate(selectedDate);
                setShowDatePicker(false);
              }
            }}  
          />
        )}
        {/* income and expenses */}
        <View className="h-1/8 flex flex-row justify-between gap-2">
          <View className="flex-1 bg-green-50 rounded-lg p-4 flex items-center justify-center">
            <View className="w-full flex flex-row justify-between">
              <Text className="font-bold text-green-500">Income</Text>
              <Text className="text-green-500">1000</Text>
            </View>
          </View>
          <View className="flex-1 bg-red-50 rounded-lg p-4 flex items-center justify-center">
            <View className="w-full flex flex-row justify-between">
              <Text className="font-bold text-red-500">Expenses</Text>
              <Text className="text-red-500">1000</Text>
            </View>
          </View>
        </View>
        {/* details */}
        <View className="flex-1 bg-gray-100 rounded-lg py-4 gap-2">
          <Text className="text-gray-500">
            Details
          </Text>
          <ScrollView className="flex-1">
            <RecordCard record={{
              id: 1,
              title: 'Salary',
              amount: 1000,
              createdAt: '2021-01-01'
            }} />
          </ScrollView>
        </View>
      </SafeAreaView>  
    )
}


