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
        <ScrollView style={{ padding: 20, backgroundColor: '#F3EDF7' }}>
            <View style={{ backgroundColor: 'white', padding: 20, borderRadius: 10, borderColor: '#000080', borderWidth: 2 }}>
                <Text style={{ fontSize: 18, fontWeight: 'bold', color: '#000080', marginBottom: 10 }}>Sınav Soruları</Text>
                
                {questions.map((question, qIndex) => (
                    <View key={question.id} style={{ marginBottom: 20, padding: 10, borderWidth: 2, borderColor: '#000080', borderRadius: 5 }}>
                        <Text style={{ color: '#000080' }}>Soru {qIndex + 1}</Text>
                        <TextInput
                            placeholder="Soru metnini girin"
                            value={question.text}
                            onChangeText={(text) => handleUpdateQuestion(qIndex, 'text', text)}
                            style={{ borderWidth: 2, borderColor: '#000080', padding: 10, borderRadius: 5, marginBottom: 10 }}
                        />
                        {question.options.map((option, oIndex) => (
                            <TextInput
                                key={oIndex}
                                placeholder={`Şık ${String.fromCharCode(65 + oIndex)}`}
                                value={option}
                                onChangeText={(text) => handleUpdateOption(qIndex, oIndex, text)}
                                style={{ borderWidth: 2, borderColor: '#000080', padding: 10, borderRadius: 5, marginBottom: 5 }}
                            />
                        ))}

                        {/* Şık Ekle Butonu */}
                        <TouchableOpacity onPress={() => addOption(qIndex)} style={{ backgroundColor: '#000080', padding: 10, borderRadius: 5, marginTop: 5 }}>
                            <Text style={{ color: 'white', textAlign: 'center' }}>Şık Ekle</Text>
                        </TouchableOpacity>

                        {/* Güncelle ve Sil Butonları */}
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 10 }}>
                            <TouchableOpacity onPress={() => updateQuestion(question.id)} style={{ backgroundColor: '#000080', padding: 10, borderRadius: 5, flex: 1, marginRight: 5 }}>
                                <Text style={{ color: 'white', textAlign: 'center' }}>Güncelle</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => removeQuestion(question.id)} style={{ backgroundColor: '#000080', padding: 10, borderRadius: 5, flex: 1, marginLeft: 5 }}>
                                <Text style={{ color: 'white', textAlign: 'center' }}>Sil</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                ))}
                
                <TouchableOpacity onPress={addQuestion} style={{ backgroundColor: '#000080', padding: 10, borderRadius: 5, marginBottom: 10 }}>
                    <Text style={{ color: 'white', textAlign: 'center' }}>Soru Ekle</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
};

export default ExamForm;
