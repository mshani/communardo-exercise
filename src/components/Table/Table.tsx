import React, { useState,useEffect } from 'react';
import styled from 'styled-components';
import DynamicTable from '@atlaskit/dynamic-table';

const Wrapper = styled.div`
    min-width: 600px;
`

interface User {
    userId: number,
    id: number,
    title: string,
    body: string
}

export const createHead = (withWidth: boolean) => {
  return {
    key : "headRow",
    cells: [
      {
        key: 'id',
        content: 'Id',
        isSortable: true,
        width: 5,
      },
      {
        key: 'userId',
        content: 'User Id',
        shouldTruncate: true,
        isSortable: false,
        width: 5
      },
      {
        key: 'title',
        content: 'Title',
        shouldTruncate: false,
        isSortable: false,
        width: 25
      },
      {
        key: 'body',
        content: 'Body',
        shouldTruncate: true,
        isSortable: false,
        width: 25,
      },
    ],
  };
};

const Table = () => {

    const [data, setData] = useState([])
    const headRow = createHead(true);
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts`)
        .then(data => data.json())
        .then(response => {
            setData(response)
        })
    }, [])


    const rows = data.map(( user: User, index: number ) => ({
        key: `row-${index}`,
        cells: [
            {
                key: `${index}-td1`,
                content: user.id
            },
            {
                key: `${index}-td2`,
                content: user.userId
            },
            {
                key: `${index}-td3`,
                content: user.title
            },
            {
                key: `${index}-td4`,
                content: user.body
            }
        ]
    }))

    return(
        <Wrapper>
            {
                data.length > 0 ?                
                  <DynamicTable
                    caption=""
                    head={headRow}
                    rows={rows}
                    rowsPerPage={10}
                    defaultPage={1}
                    loadingSpinnerSize="large"
                    isLoading={false}
                    isFixedSize
                    defaultSortKey="term"
                    defaultSortOrder="ASC"
                    onSort={() => console.log('onSort')}
                    onSetPage={() => console.log('onSetPage')
                  }
                  />
                : 
                <p>Loading data table....</p>
            }
      </Wrapper>
    )
}

export default Table;