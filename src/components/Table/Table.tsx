import React, { useState,useEffect } from 'react';
import styled from 'styled-components';
import DynamicTable from '@atlaskit/dynamic-table';

interface User {
    userId: number,
    id: number,
    title: string,
    body: string
}

const Wrapper = styled.div`
    min-width: 600px;
`

const Table = () => {

    const [data, setData] = useState([])

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts`)
        .then(data => data.json())
        .then(response => {
            setData(response)
        })
    }, [])


    const rows = data.map(( user: User, index: number ) => ({
        key: `row-${index}-${user.id}`,
        cells: [
            {
                key: `item-${user.id}`,
                content: user.id
            },
            {
                key: `item-${user.userId}`,
                content: user.userId
            },
            {
                key: `item-${user.title}`,
                content: user.title
            },
            {
                key: `item-${user.body}`,
                content: user.body
            }
        ]
    }))

    return(
        <Wrapper>
            {
                data.length > 0 ? 

                
        <DynamicTable
          caption="Users table"
          head={
            {
                cells: [
                  {
                    key: 'id',
                    content: 'Id',
                    isSortable: true,
                    width: true ? 10 : undefined,
                  },
                  {
                    key: 'userId',
                    content: 'User Id',
                    shouldTruncate: true,
                    isSortable: true,
                    width: true ? 10 : undefined,
                  },
                  {
                    key: 'title',
                    content: 'Title',
                    shouldTruncate: true,
                    isSortable: true,
                    width: true ? 25 : undefined,
                  },
                  {
                    key: 'body',
                    content: 'Body',
                    shouldTruncate: true,
                    isSortable: true,
                    width: true ? 25 : undefined,
                  },
                ],
              }
          }
          rows={rows}
          rowsPerPage={10}
          defaultPage={1}
          loadingSpinnerSize="large"
          isLoading={false}
          isFixedSize
          defaultSortKey="term"
          defaultSortOrder="ASC"
          onSort={() => console.log('onSort')}
          onSetPage={() => console.log('onSetPage')}
        />
        : <p>loading....</p>
            }
      </Wrapper>
    )
}

export default Table;