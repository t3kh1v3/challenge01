import { Button, Col, Container, Form, Row, Table } from 'react-bootstrap';
import React, { useCallback, useState } from 'react';

import { Link } from 'react-router-dom';
import _ from 'lodash';

export const List = () => {
    const [chamados, setChamados] = useState([
        { id: 1, osId: 'OS1234', cliente: 'Empresa ABC', data: '28/08/2024', status: 'Em andamento', descricao: 'Problema no servidor' },
        { id: 2, osId: 'OS1235', cliente: 'Empresa XYZ', data: '27/08/2024', status: 'Concluído', descricao: 'Atualização de software' },
        { id: 3, osId: 'OS1236', cliente: 'Empresa 123', data: '26/08/2024', status: 'Pendente', descricao: 'Instalação de novo equipamento' },
    ]);

    const [searchTerm, setSearchTerm] = useState('');
    const [selectedChamados, setSelectedChamados] = useState([]);
    const [chatbotExpanded, setChatbotExpanded] = useState(false);

    const handleSearch = useCallback(
        _.debounce((term) => setSearchTerm(term), 300),
        []
    );

    const filteredChamados = chamados.filter(chamado =>
        chamado.osId.toLowerCase().includes(searchTerm.toLowerCase()) ||
        chamado.cliente.toLowerCase().includes(searchTerm.toLowerCase()) ||
        chamado.descricao.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const handleCycleStatus = (id) => {
        const updatedChamados = chamados.map(chamado => {
            if (chamado.id === id) {
                let newStatus;
                switch (chamado.status) {
                    case 'Em andamento':
                        newStatus = 'Pendente';
                        break;
                    case 'Pendente':
                        newStatus = 'Concluído';
                        break;
                    case 'Concluído':
                        newStatus = 'Em andamento';
                        break;
                    default:
                        newStatus = 'Em andamento';
                }
                return { ...chamado, status: newStatus };
            }
            return chamado;
        });
        setChamados(updatedChamados);
    };

    const handleRemoveChamado = (id) => {
        const updatedChamados = chamados.filter(chamado => chamado.id !== id);
        setChamados(updatedChamados);
    };

    const handleSelect = (id) => {
        if (selectedChamados.includes(id)) {
            setSelectedChamados(selectedChamados.filter(chamadoId => chamadoId !== id));
        } else {
            setSelectedChamados([...selectedChamados, id]);
        }
    };

    const toggleChatbot = () => {
        setChatbotExpanded(!chatbotExpanded);
    };

    const getStatusStyle = (status) => {
        switch (status) {
            case 'Concluído':
                return { backgroundColor: 'green', color: 'white' };
            case 'Em andamento':
                return { backgroundColor: 'yellow', color: 'black' };
            case 'Pendente':
                return { backgroundColor: 'red', color: 'white' };
            default:
                return {};
        }
    };

    return (
        <Container fluid style={{ padding: '5em 2em' }}>
            <Row
                style={{
                    backgroundColor: 'white',
                    paddingTop: '5em',
                    paddingBottom: '5em',
                    marginLeft: '-2.75em',
                    marginRight: '-2.75em',
                    paddingLeft: '2em',
                    paddingRight: '2em',
                    marginBottom: '-2em',
                }}
            >
                <Col xs={12}>
                    <h1>Chamados de Suporte Técnico</h1>

                    {/* Caixa de Pesquisa */}
                    <Form.Control
                        type="text"
                        placeholder="Pesquisar..."
                        onChange={e => handleSearch(e.target.value)}
                        style={{ marginBottom: '1em' }}
                    />

                    {/* Tabela de Chamados */}
                    <Table striped bordered hover>
                        <thead>
                        <tr>
                            <th>#</th>
                            <th>ID do Chamado</th>
                            <th>Cliente</th>
                            <th>Data de Abertura</th>
                            <th>Status</th>
                            <th>Descrição</th>
                            <th>Ações</th>
                            <th>Selecionar</th>
                        </tr>
                        </thead>
                        <tbody>
                        {filteredChamados.map((chamado, index) => (
                            <tr key={chamado.id}>
                                <td>{index + 1}</td>
                                <td>{chamado.osId}</td>
                                <td>{chamado.cliente}</td>
                                <td>{chamado.data}</td>
                                <td style={getStatusStyle(chamado.status)}>{chamado.status}</td>
                                <td>{chamado.descricao}</td>
                                <td>
                                    <Button variant="info" onClick={() => handleCycleStatus(chamado.id)} style={{ marginRight: '5px' }}>
                                        Alterar Status
                                    </Button>
                                    <Button variant="danger" onClick={() => handleRemoveChamado(chamado.id)}>
                                        Remover
                                    </Button>
                                </td>
                                <td>
                                    <Form.Check
                                        type="checkbox"
                                        checked={selectedChamados.includes(chamado.id)}
                                        onChange={() => handleSelect(chamado.id)}
                                    />
                                </td>
                            </tr>
                        ))}
                        </tbody>
                    </Table>
                </Col>
            </Row>

            {/* Caixa Flutuante de Chatbot */}
            <div style={{
                position: 'fixed',
                bottom: '20px',
                right: '20px',
                width: chatbotExpanded ? '300px' : '50px',
                height: chatbotExpanded ? '400px' : '50px',
                backgroundColor: chatbotExpanded ? 'white' : '#D9A520',
                border: chatbotExpanded ? '1px solid #D9A520' : 'none',
                borderRadius: '10px',
                boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: chatbotExpanded ? 'space-between' : 'center',
                alignItems: 'center',
                cursor: 'pointer',
                zIndex: 1000,
            }}
                 onClick={toggleChatbot}
            >
                {chatbotExpanded ? (
                    <>
                        <div style={{
                            backgroundColor: '#D9A520',
                            padding: '10px',
                            borderRadius: '8px 8px 0 0',
                            color: 'white',
                            textAlign: 'center',
                            fontWeight: 'bold',
                            width: '100%',
                        }}>
                            Chatbot
                        </div>
                        <div style={{
                            flex: 1,
                            overflowY: 'auto',
                            padding: '10px',
                            width: '100%',
                        }}>
                            <p>Olá! Como posso ajudar você hoje?</p>
                        </div>
                        <Form.Control type="text" placeholder="Digite sua mensagem..." />
                    </>
                ) : (
                    <div style={{ color: 'white', fontSize: '2em' }}>💬</div>
                )}
            </div>
        </Container>
    );
};
