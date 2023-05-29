import {useQuery} from "@apollo/client";
import React from "react";
import {Character__GetCharacters} from "../gql/Character.jsx";
import {Col, Row, Input, Table, Tooltip} from "antd";
import {ManOutlined, SearchOutlined, WomanOutlined} from "@ant-design/icons";

const Homepage = () => {
    const {data: {characters: {results: charactersData} = []} = {}, refetch, loading, error} = useQuery(Character__GetCharacters);

    const columns = [
        {
            key: 'image',
            dataIndex: 'image',
            render: (img) => (
                <img src={img} alt="Character icon" height="50" width="50" style={{borderRadius: 10}}/>
            )
        },
        {
            title: 'Character',
            key: 'name',
            dataIndex: 'name'
        },
        {
            title: 'Gender',
            key: 'gender',
            dataIndex: 'gender',
            render: (gender) => (
                <>
                    {
                        gender === 'Male' ? (
                            <ManOutlined style={{fontSize: '2em'}} />
                        ) : (
                            <WomanOutlined style={{fontSize: '2em'}} />
                        )
                    }
                </>
            )
        },
        {
            title: 'Status',
            key: 'status',
            dataIndex: 'status',
            render: (status) => (
                <Tooltip title={status}>
                    <div className="indicator" style={{backgroundColor: status === 'Alive' ? '#62f680' : '#ff5e5e', border: status === 'Alive' ? '1px solid #62f680' : '1px solid #ff5e5e'}} />
                </Tooltip>
            )
        }
    ];

    return (
        <>
            <div className="app-container">
                <Row>
                    <Col span={6}>
                        <Input
                            className="mb-2"
                            prefix={<SearchOutlined />}
                            placeholder="Search character..."
                            onChange={(e) => {
                              refetch({
                                  name: e.target.value
                              });
                            }}
                        />
                    </Col>
                    <Col span={24}>
                        <Table
                            columns={columns}
                            dataSource={charactersData ?? []}
                            loading={loading}
                        />
                    </Col>
                </Row>
            </div>
        </>
    )
}

export default Homepage;