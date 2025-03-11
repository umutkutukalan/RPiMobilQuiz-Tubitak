import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView } from 'react-native';

const ExamForm = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [questions, setQuestions] = useState([
        { id: 1, text: '', options: ['', '', '', ''], explanation: '' }
    ]);

    const addQuestion = () => {
        setQuestions([...questions, { id: questions.length + 1, text: '', options: ['', '', '', ''], explanation: '' }]);
    };

    const handleQuestionChange = (index: number, text: string) => {
        const updatedQuestions = [...questions];
        updatedQuestions[index].text = text;
        setQuestions(updatedQuestions);
    };

    const handleOptionChange = (qIndex: number, oIndex: number, text: string) => {
        const updatedQuestions = [...questions];
        updatedQuestions[qIndex].options[oIndex] = text;
        setQuestions(updatedQuestions);
    };

    return (
        <ScrollView style={{ padding: 20, backgroundColor: '#F3EDF7' }}>
            <View style={{ backgroundColor: 'white', padding: 20, borderRadius: 10, borderColor: '#DDA0DD', borderWidth: 2 }}>
                <Text style={{ fontSize: 18, fontWeight: 'bold', color: '#800080', marginBottom: 10 }}>Sınav Oluştur</Text>
                <TextInput
                    placeholder="Sınav başlığını girin"
                    value={title}
                    onChangeText={setTitle}
                    style={{ borderWidth: 2, borderColor: '#E6B0D4', padding: 10, borderRadius: 5, marginBottom: 10 }}
                />
                <TextInput
                    placeholder="Sınav hakkında kısa bir açıklama girin"
                    value={description}
                    onChangeText={setDescription}
                    style={{ borderWidth: 2, borderColor: '#E6B0D4', padding: 10, borderRadius: 5, marginBottom: 20 }}
                />
                
                {questions.map((question, qIndex) => (
                    <View key={question.id} style={{ marginBottom: 20, padding: 10, borderWidth: 2, borderColor: '#DDA0DD', borderRadius: 5 }}>
                        <Text style={{ color: '#800080' }}>Soru {question.id}</Text>
                        <TextInput
                            placeholder="Soru metnini girin"
                            value={question.text}
                            onChangeText={(text) => handleQuestionChange(qIndex, text)}
                            style={{ borderWidth: 2, borderColor: '#E6B0D4', padding: 10, borderRadius: 5, marginBottom: 10 }}
                        />
                        {question.options.map((option, oIndex) => (
                            <TextInput
                                key={oIndex}
                                placeholder={`Şık ${String.fromCharCode(65 + oIndex)}`}
                                value={option}
                                onChangeText={(text) => handleOptionChange(qIndex, oIndex, text)}
                                style={{ borderWidth: 2, borderColor: '#E6B0D4', padding: 10, borderRadius: 5, marginBottom: 5 }}
                            />
                        ))}
                        <TextInput
                            placeholder="Doğru cevap için açıklama girin"
                            value={question.explanation}
                            onChangeText={(text) => {
                                const updatedQuestions = [...questions];
                                updatedQuestions[qIndex].explanation = text;
                                setQuestions(updatedQuestions);
                            }}
                            style={{ borderWidth: 2, borderColor: '#E6B0D4', padding: 10, borderRadius: 5, marginTop: 10 }}
                        />
                    </View>
                ))}
                
                <TouchableOpacity onPress={addQuestion} style={{ backgroundColor: '#DDA0DD', padding: 10, borderRadius: 5, marginBottom: 10 }}>
                    <Text style={{ color: 'white', textAlign: 'center' }}>Soru Ekle</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{ backgroundColor: '#1C1C64', padding: 10, borderRadius: 5 }}>
                    <Text style={{ color: 'white', textAlign: 'center' }}>Kaydet</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
};

export default ExamForm;
