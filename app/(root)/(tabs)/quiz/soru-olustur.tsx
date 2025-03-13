import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView } from 'react-native';

const ExamForm = () => {
    const [questions, setQuestions] = useState([
        { id: 1, text: '', options: ['', '', '', ''] }
    ]);

    // Yeni soru ekleme
    const addQuestion = () => {
        const newQuestion = { id: Date.now(), text: '', options: ['', '', '', ''] };
        setQuestions([...questions, newQuestion]);
    };

    // Şık ekleme işlemi
    const addOption = (qIndex: number) => {
        const updatedQuestions = [...questions];
        updatedQuestions[qIndex].options.push('');
        setQuestions(updatedQuestions);
    };

    // Soruyu güncelleme işlemi
    const updateQuestion = (id: number) => {
        alert(`Soru ${id} güncellendi!`);
    };

    // Belirli bir sorunun içeriğini güncelleme
    const handleUpdateQuestion = (index: number, key: 'text' | 'options', value: string) => {
        const updatedQuestions = [...questions];
        (updatedQuestions[index] as any)[key] = value;
        setQuestions(updatedQuestions);
    };

    // Şık içeriğini güncelleme
    const handleUpdateOption = (qIndex: number, oIndex: number, value: string) => {
        const updatedQuestions = [...questions];
        updatedQuestions[qIndex].options[oIndex] = value;
        setQuestions(updatedQuestions);
    };

    // Belirli bir soruyu silme
    const removeQuestion = (id: number) => {
        const updatedQuestions = questions.filter((question) => question.id !== id);
        setQuestions(updatedQuestions);
    };

    return (
        <ScrollView className='p-4 bg-[#F3EDF7]'>
            <View className='bg-white p-4 rounded-lg border-2 border-[#DDA0DD] mb-4 shadow-md '>
                <Text className='text-[#800080] text-xl font-bold mb-5'>Sınav Soruları</Text>
                
                {questions.map((question, qIndex) => (
                    <View key={question.id} className='bg-white rounded-lg mb-4 shadow-md'>
                        <Text className='text-[#000080]'>Soru {qIndex + 1}</Text>
                        <TextInput
                            placeholder="Soru metnini girin"
                            value={question.text}
                            onChangeText={(text) => handleUpdateQuestion(qIndex, 'text', text)}
                            className='border-2 border-[#000080] p-2 rounded-md mb-5 mt-2 w-full'
                        />
                        {question.options.map((option, oIndex) => (
                            <TextInput
                                key={oIndex}
                                placeholder={`Şık ${String.fromCharCode(65 + oIndex)}`}
                                value={option}
                                onChangeText={(text) => handleUpdateOption(qIndex, oIndex, text)}
                                className='border-2 border-[#000080] p-2 rounded-md mb-2 w-full'
                            />
                        ))}

                        {/* Şık Ekle Butonu */}
                        <TouchableOpacity onPress={() => addOption(qIndex)} className='bg-[#000080] p-2 rounded-md mb-2'>
                            <Text className='text-white text-center'>Şık Ekle</Text>
                        </TouchableOpacity>

                        {/* Güncelle ve Sil Butonları */}
                        <View className='flex-row justify-between mt-2'>
                            <TouchableOpacity onPress={() => updateQuestion(question.id)} className='bg-[#000080] p-2 rounded-md flex-1 mr-2'>
                                <Text className='text-white text-center'>Güncelle</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => removeQuestion(question.id)} className='bg-[#000080] p-2 rounded-md flex-1 ml-2'>
                                <Text className='text-white text-center'>Sil</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                ))}
                
                <TouchableOpacity onPress={addQuestion} className='bg-[#000080] p-2 rounded-md mb-2 shadow-md'>
                    <Text className='text-white text-center'>Soru Ekle</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
};

export default ExamForm;
