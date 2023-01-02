import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Text } from '@nextui-org/react';


const Header = () => {
    const collapseItems = [
        'Pokemon',
        'Regions',
        'Items',
        'Games'
    ]

    return (
        <div>
            <Navbar variant='sticky' css={{ background: '#EDF2F4'}}>
              <Navbar.Brand>
                <Navbar.Toggle showIn="xs" aria-label='toggle navigation'/>
                <Text b color='black'>
                    Pokedex!
                </Text>
              </Navbar.Brand>
              <Navbar.Content hideIn="xs">
                <Navbar.Link>Pokemon</Navbar.Link>
                <Navbar.Link>Regions</Navbar.Link>
                <Navbar.Link>Items</Navbar.Link>
                <Navbar.Link>Games</Navbar.Link>
              </Navbar.Content>
              <Navbar.Collapse>
                {collapseItems.map((item,index) => (
                    <Navbar.CollapseItem key={item}>
                        <Link 
                         color='inherit'
                         css={{
                            minWidth: "100%",
                         }}
                         href="#"
                        >
                            {item}
                        </Link>
                    </Navbar.CollapseItem>
                ))}
              </Navbar.Collapse>
            </Navbar>
        </div>
    )
}

export default Header;