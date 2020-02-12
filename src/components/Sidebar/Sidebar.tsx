import { jsx } from '@emotion/core';
import React, { Component, SyntheticEvent } from 'react';
import Button from '@atlaskit/button';
import Drawer, { DrawerWidth } from '@atlaskit/drawer';
import  {orangeButton, menuItem} from '../../styles/styles';

import {
  MenuGroup,
  Section,
  HeadingItem,
  ButtonItem
} from '@atlaskit/menu';

interface State {
  isDrawerOpen: boolean;
  width: DrawerWidth;
}

const ImgIcon = ({ src }: { src: string }) => (
  <img src={src} height={24} width={24} style={{ borderRadius: 3 }} />
);

export default class Sidebar extends Component<{}, State> {
    state = {
      isDrawerOpen: false,
      width: 'narrow' as DrawerWidth
    };
  
    openDrawer = () =>
      this.setState({
        isDrawerOpen: true,
      });
  
    onClose = (...args: [SyntheticEvent<HTMLElement>, any]) => {
      console.log('onClose', args);
      this.setState({
        isDrawerOpen: false,
      });
    };
  
    onCloseComplete = (...args: [HTMLElement]) =>
      console.log('onCloseComplete', args);
  
    onOpenComplete = (...args: [HTMLElement]) =>
      console.log('onOpenComplete', args);
  
    render() {
      return (
        <div css={{ padding: '2rem' }}>
          <Drawer
            onClose={this.onClose}
            onCloseComplete={this.onCloseComplete}
            onOpenComplete={this.onOpenComplete}
            isOpen={this.state.isDrawerOpen}
            width={this.state.width}
          >
            <code>
            <MenuGroup>
              <Section>
              <HeadingItem css={menuItem}>Category One</HeadingItem>
                <ButtonItem
                  elemBefore=''
                  description="Lets just put some text"
                >
                Menu Item One
                </ButtonItem>
                <ButtonItem
                 elemBefore=''
                  description="Same as above"
                >
                 Menu Two
                </ButtonItem>
              <HeadingItem>Category two</HeadingItem>
                <ButtonItem
                  elemBefore=''
                  description="Just for the fun of it"
                >
                  Some other menu item
                </ButtonItem>
                <ButtonItem
                  elemBefore=''
                  description="So, what do you think?"
                >
                  Yet another item
                </ButtonItem>
                <ButtonItem
                  elemBefore=''
                  description="Creativity level 9000+"
                >
                  Last one I promise
                </ButtonItem>
              </Section>
            </MenuGroup>
            </code>
          </Drawer>
          <Button id="open-drawer" type="button" css={orangeButton} onClick={this.openDrawer}>
            Open drawer
          </Button>
        </div>
      );
    }
  }