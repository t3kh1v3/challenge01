import React, { useState, useCallback } from 'react';
import { Button, Col, Container, Row, Table, Form, Dropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export const List = () => {
    const [chamados, setChamados] = useState([
        { id: 1, osId: 'INC0208388', cliente: 'Fábrica 01', data: '02/05/2024', status: 'Pendente', descricao: 'Sistema não abre' },
        { id: 2, osId: 'TASK0948363', cliente: 'Escritório Central', data: '01/05/2024', status: 'Concluído', descricao: 'Revogação de Acesso' },
        { id: 3, osId: 'TASK0944775', cliente: 'Fábrica 01', data: '22/04/2024', status: 'Em andamento', descricao: 'Emprestimo de Equipamento' },
        { id: 4, osId: 'INC0204817', cliente: 'Escritório Central', data: '16/04/2024', status: 'Concluído', descricao: 'Lentidão no Sistema' },
        { id: 5, osId: 'TASK0939623', cliente: 'Centro de Distribuição', data: '15/04/2024', status: 'Pendente', descricao: 'Solicitação novo ponto de rede' },

    ]);

    const [searchTerm, setSearchTerm] = useState('');
    const [chatbotExpanded, setChatbotExpanded] = useState(false);

    const handleSearch = useCallback((term) => {
        setSearchTerm(term);
    }, []);

    const filteredChamados = chamados.filter(chamado =>
        chamado.osId.toLowerCase().includes(searchTerm.toLowerCase()) ||
        chamado.cliente.toLowerCase().includes(searchTerm.toLowerCase()) ||
        chamado.descricao.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const handleUpdateStatus = (id, newStatus) => {
        const updatedChamados = chamados.map(chamado =>
            chamado.id === id ? { ...chamado, status: newStatus } : chamado
        );
        setChamados(updatedChamados);
    };

    const handleRemoveChamado = (id) => {
        const updatedChamados = chamados.filter(chamado => chamado.id !== id);
        setChamados(updatedChamados);
    };

    const getStatusStyle = (status) => {
        switch (status) {
            case 'Concluído':
                return { backgroundColor: 'green', color: 'white' };
            case 'Em andamento':
                return { backgroundColor: '#0072b1', color: 'black' };
            case 'Pendente':
                return { backgroundColor: 'orange', color: 'black' };
            default:
                return {};
        }
    };

    const toggleChatbot = () => {
        setChatbotExpanded(!chatbotExpanded);
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
                            <th>Local</th>
                            <th>Data de Abertura</th>
                            <th>Status</th>
                            <th>Descrição</th>
                            <th>Ações</th>
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
                                    <Dropdown>
                                        <Dropdown.Toggle
                                            variant="primary"
                                            style={{
                                                backgroundColor: '#007bff', // Cor do botão
                                                borderColor: '#007bff', // Cor da borda do botão
                                            }}
                                        >
                                            Ações
                                        </Dropdown.Toggle>
                                        <Dropdown.Menu>
                                            <Dropdown.Item
                                                onClick={() => handleUpdateStatus(chamado.id, 'Em andamento')}
                                                style={{ color: '#0072b1' }} // Cor do texto
                                            >
                                                Em andamento
                                            </Dropdown.Item>
                                            <Dropdown.Item
                                                onClick={() => handleUpdateStatus(chamado.id, 'Pendente')}
                                                style={{ color: 'orange' }} // Cor do texto
                                            >
                                                Pendente
                                            </Dropdown.Item>
                                            <Dropdown.Item
                                                onClick={() => handleUpdateStatus(chamado.id, 'Concluído')}
                                                style={{ color: 'green' }} // Cor do texto
                                            >
                                                Concluído
                                            </Dropdown.Item>
                                            <Dropdown.Item
                                                onClick={() => {
                                                    const confirmRemoval = window.confirm('Tem certeza de que deseja remover este chamado?');
                                                    if (confirmRemoval) {
                                                        handleRemoveChamado(chamado.id);
                                                    }
                                                }}
                                                style={{ color: '#dc3545' }} // Cor do texto
                                            >
                                                Remover
                                            </Dropdown.Item>
                                        </Dropdown.Menu>
                                    </Dropdown>
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
                display: 'flex',
                flexDirection: 'column',
                justifyContent: chatbotExpanded ? 'space-between' : 'center',
                alignItems: 'center',
                cursor: 'pointer',
                zIndex: 1000,
                transition: 'transform 0.3s ease',
                overflow: 'hidden',
                transform: 'scale(1)', // Inicialmente sem escala
                boxShadow: '0 0 10px rgba(0, 0, 0, 0.5)', // Sombra no ícone
            }}
                 onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'} // Aumenta ao passar o mouse
                 onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'} // Retorna ao tamanho original
            >
                {/* Nome do Chatbot */}
                {chatbotExpanded && (
                    <div
                        style={{
                            backgroundColor: '#D9A520',
                            padding: '10px',
                            borderRadius: '8px 8px 0 0',
                            color: 'white',
                            textAlign: 'center',
                            fontWeight: 'bold',
                            width: '100%',
                            cursor: 'pointer',
                        }}
                        onClick={toggleChatbot}
                    >
                        🤖 SAM
                    </div>
                )}

                {/* Conteúdo do Chatbot */}
                {chatbotExpanded ? (
                    <>
                        <div style={{
                            flex: 1,
                            overflowY: 'auto',
                            padding: '10px',
                            width: '100%',
                            boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)', // Sombra no ícone
                        }}>
                            <p>Olá! Como posso ajudar você hoje?</p>
                        </div>
                        <Form.Control type="text" placeholder="Digite sua mensagem..." />
                    </>
                ) : (
                    <div
                        onClick={toggleChatbot}
                        style={{
                            color: 'white',
                            fontSize: '2em',
                            transition: 'transform 0.3s ease',
                        }}
                    >
                        🤖
                    </div>
                )}
            </div>

        </Container>
    );
};