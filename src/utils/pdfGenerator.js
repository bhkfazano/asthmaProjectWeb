import React from 'react';
import { Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer';
import ReactDOM from 'react-dom';
import { PDFViewer } from '@react-pdf/renderer';
import { patientForm, barriers } from '../assets/patientForm';
import _ from 'lodash';

const styles = StyleSheet.create({
    page: {
        flexDirection: 'column',
        backgroundColor: '#E4E4E4',
        width: '100%',
        height: '100%',
        justifyContent: 'flex-start',
    },
    title: {
        textAlign: 'center',
        marginTop: 20,
        color: '#8a41a6d9',
        letterSpacing: 3,
    },
    section: {
        width: '100%',
        flexDirection: 'row',
        marginTop: 30,
        justifyContent: 'flex-start'
    },
    sect: {
        width: '40%',
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        marginLeft: 45,
        
    },
    subtitle: {
        fontSize: 15,
        letterSpacing: 4,
        color: '#86217DD0',
        marginBottom: 25
    },
    item: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 10
    },
    questions: {
        width: '100%',
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'space-between',
        marginBottom: 10
    },
    label: {
        fontSize: 12,
        marginRight: 20
    },
    question: {
        fontSize: 12,
        marginRight: 20,
        marginBottom: 8
    },
    value: {
        fontSize: 12,
        color: 'grey'
    }
});

export const showPDF = (patient) => {
    const { pat, goals, history } = patient;
    const MyDocument = () => (
        <Document>
            <Page size="A4" style={styles.page}>
                <Text style={styles.title}>RESUMO DO PACIENTE</Text>
                <View style={styles.section}>
                    <View style={styles.sect}>
                        <Text style={styles.subtitle}>DADOS</Text>
                        <View style={styles.item}>
                            <Text style={styles.label}>Nome</Text>
                            <Text style={styles.value}>{pat.full_name}</Text>
                        </View>
                        <View style={styles.item}>
                            <Text style={styles.label}>CPF</Text>
                            <Text style={styles.value}>{pat.cpf}</Text>
                        </View>
                        <View style={styles.item}>
                            <Text style={styles.label}>Email</Text>
                            <Text style={styles.value}>{pat.email}</Text>
                        </View>
                        <View style={styles.item}>
                            <Text style={styles.label}>Telefone</Text>
                            <Text style={styles.value}>{pat.personal_phone}</Text>
                        </View>
                        <View style={styles.item}>
                            <Text style={styles.label}>Data de Nascimento</Text>
                            <Text style={styles.value}>{pat.birth_date.split("T")[0]}</Text>
                        </View>
                        <View style={styles.item}>
                            <Text style={styles.label}>Altura</Text>
                            <Text style={styles.value}>{pat.height}</Text>
                        </View>
                        <View style={styles.item}>
                            <Text style={styles.label}>Peso</Text>
                            <Text style={styles.value}>{pat.weight}</Text>
                        </View>
                        <View style={styles.item}>
                            <Text style={styles.label}>ID FitBit</Text>
                            <Text style={styles.value}>{pat.fitbit_id}</Text>
                        </View>
                    </View>
                    <View style={styles.sect}>
                        <Text style={styles.subtitle}>METAS ATUAIS</Text>
                        <View style={styles.item}>
                            <Text style={styles.label}>Passos por dia</Text>
                            <Text style={styles.value}>{goals.stepsPerDay}</Text>
                        </View>
                        <View style={styles.item}>
                            <Text style={styles.label}>Km por semana</Text>
                            <Text style={styles.value}>{goals.kmPerWeek}</Text>
                        </View>
                        <View style={styles.item}>
                            <Text style={styles.label}>Exercícios recomendados</Text>
                            <Text style={styles.value}>{goals.other}</Text>
                        </View>
                        <View style={styles.item}>
                            <Text style={styles.label}>Exercícios respiratórios</Text>
                            <Text style={styles.value}>{goals.resp}</Text>
                        </View>
                        <View style={styles.item}>
                            <Text style={styles.label}>Observações</Text>
                            <Text style={styles.value}>{goals.others}</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.section}>
                    <View style={styles.sect}>
                        <Text style={styles.subtitle}>QUESTIONÁRIO</Text>
                        {_.map(patientForm, question => {
                            return (
                                <View style={styles.questions}>
                                    <Text style={styles.question}>{question.number + ". " + question.question}</Text>
                                    <Text style={styles.value}>{history.medicalHistory[question.id]}</Text>
                                </View>
                            );
                        })}

                    </View>
                    <View style={styles.sect}>
                        <Text style={styles.subtitle}>BARREIRAS</Text>
                        {_.map(barriers.questions, question => {
                            return (
                                <View style={styles.questions}>
                                    <Text style={styles.question}>{question.number + ". " + question.question}</Text>
                                    <Text style={styles.value}>{history.barriers[question.id]}</Text>
                                </View>
                            );
                        })}
                    </View>
                </View>
            </Page>
        </Document>
    );
    const App = () => (
        <PDFViewer width="100%" height="100%">
            <MyDocument />
        </PDFViewer>
    );
    ReactDOM.render(<App />, document.getElementById('root'));
}