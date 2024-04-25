'use client'

import React, { useRef } from 'react'
import MDEditor, { ICommand, commands } from '@uiw/react-md-editor'
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarTrigger,
} from '@/components/ui/menubar'
import { Label } from '../ui/label'
import { useTheme } from 'next-themes'

interface MarkdownEditorProps {
  value: any
  onChange: any
  editorHeight?: any
  iconHeight?: string
  iconWidth?: string
  className?: string
  mounted?: boolean
}

export const MarkdownEditor = ({
  value,
  onChange,
  editorHeight,
  iconHeight,
  iconWidth,
  className,
  mounted,
  ...props
}: MarkdownEditorProps) => {
  const { setTheme, theme } = useTheme()
  const editorColorMode: string | undefined = theme ? theme : 'dark'
  const [toolbarVisible] = React.useState<boolean>(false)
  const [showBottomPreview, setShowBottomPreview] =
    React.useState<boolean>(true)
  const rootMenubarClassName: string = 'xs:h-10 sm:h-12 md:h-12 lg:h-14 xl:h-14 justify-center '
  const menubarTriggerClassName: string =
    'text-white bg-blue-500 dark:hover:bg-blue-600 h-full xs:text-xs sm:text-xs md:text-sm lg:text-md xl:text-md'
  const menubarItemClassName: string = 'dark:hover:bg-blue-600'

  let mdEditorHeight = 1500 // TODO: Dont harcode this value. Calculate this based on the height of the window
  let svgIconHeight = '0'
  let svgIconWidth = '0'
  if (iconHeight) {
    svgIconHeight = iconHeight
  }
  if (iconWidth) {
    svgIconWidth = iconWidth
  }
  if (editorHeight) {
    mdEditorHeight = editorHeight
  }

  let newCommands: any = []
  const titleGroup: any = commands.group(
    [
      commands.title1,
      commands.title2,
      commands.title3,
      commands.title4,
      commands.title5,
      commands.title6,
    ],
    {
      name: 'title',
      groupName: 'title',
      buttonProps: { 'aria-label': 'Insert title' },
      icon: (
        <svg width={svgIconWidth} height={svgIconHeight} viewBox="0 0 520 520">
          <path
            fill="currentColor"
            d="M15.7083333,468 C7.03242448,468 0,462.030833 0,454.666667 L0,421.333333 C0,413.969167 7.03242448,408 15.7083333,408 L361.291667,408 C369.967576,408 377,413.969167 377,421.333333 L377,454.666667 C377,462.030833 369.967576,468 361.291667,468 L15.7083333,468 Z M21.6666667,366 C9.69989583,366 0,359.831861 0,352.222222 L0,317.777778 C0,310.168139 9.69989583,304 21.6666667,304 L498.333333,304 C510.300104,304 520,310.168139 520,317.777778 L520,352.222222 C520,359.831861 510.300104,366 498.333333,366 L21.6666667,366 Z M136.835938,64 L136.835937,126 L107.25,126 L107.25,251 L40.75,251 L40.75,126 L-5.68434189e-14,126 L-5.68434189e-14,64 L136.835938,64 Z M212,64 L212,251 L161.648438,251 L161.648438,64 L212,64 Z M378,64 L378,126 L343.25,126 L343.25,251 L281.75,251 L281.75,126 L238,126 L238,64 L378,64 Z M449.047619,189.550781 L520,189.550781 L520,251 L405,251 L405,64 L449.047619,64 L449.047619,189.550781 Z"
          ></path>
        </svg>
      ),
    }
  )

  newCommands.push(titleGroup)

  let omitKeys: string[] = [
    'code',
    'codeBlock',
    'comment',
    'edit',
    'issue',
    'live',
    'preview',
    'fullscreen',
    'help',
    'title1',
    'title2',
    'title3',
    'title4',
    'title5',
    'title6',
  ]

  const allCommands: any = Object.values(commands)
  allCommands.map(
    (
      item: {
        name: string | undefined
        buttonProps: any
        icon: { props: any }
      },
      index: number
    ) => {
      const cmdKey: string | undefined = item?.name ? item.name : undefined
      if (cmdKey && !omitKeys.includes(cmdKey)) {
        if (typeof item === 'object') {
          if (item?.icon?.props) {
            const itemCopy = {
              ...item,
              icon: {
                ...item.icon,
                props: {
                  ...item.icon.props,
                  width: svgIconWidth,
                  height: svgIconHeight,
                },
              },
            }
            newCommands.push(itemCopy)
          }
        }
      }
    }
  )

  let customCodeEditCommand: ICommand = {}
  if (commands?.codeEdit) {
    customCodeEditCommand = commands?.codeEdit
    customCodeEditCommand.icon = (
      <svg width={svgIconWidth} height={svgIconHeight} viewBox="0 0 520 520">
        <polygon
          fill="currentColor"
          points="0 71.293 0 122 319 122 319 397 0 397 0 449.707 372 449.413 372 71.293"
        ></polygon>
        <polygon
          fill="currentColor"
          points="429 71.293 520 71.293 520 122 481 123 481 396 520 396 520 449.707 429 449.413"
        ></polygon>
      </svg>
    )
  }

  let customCodeLiveCommand: ICommand = {}
  if (commands?.codeLive) {
    customCodeLiveCommand = commands.codeLive
    customCodeLiveCommand.icon = (
      <svg width={svgIconWidth} height={svgIconHeight} viewBox="0 0 520 520">
        <polygon
          fill="currentColor"
          points="0 71.293 0 122 179 122 179 397 0 397 0 449.707 232 449.413 232 71.293"
        ></polygon>
        <polygon
          fill="currentColor"
          points="289 71.293 520 71.293 520 122 341 123 341 396 520 396 520 449.707 289 449.413"
        ></polygon>
      </svg>
    )
  }

  let customCodePreviewCommand: ICommand = {}
  if (commands?.codePreview) {
    customCodePreviewCommand = commands.codePreview
    customCodePreviewCommand.icon = (
      <svg width={svgIconWidth} height={svgIconHeight} viewBox="0 0 520 520">
        <polygon
          fill="currentColor"
          points="0 71.293 0 122 38.023 123 38.023 398 0 397 0 449.707 91.023 450.413 91.023 72.293"
        ></polygon>
        <polygon
          fill="currentColor"
          points="148.023 72.293 520 71.293 520 122 200.023 124 200.023 397 520 396 520 449.707 148.023 450.413"
        ></polygon>
      </svg>
    )
  }

  let customFullscreenCommand: ICommand = {}
  if (commands?.fullscreen) {
    customFullscreenCommand = commands.fullscreen
    customFullscreenCommand.icon = (
      <svg width={svgIconWidth} height={svgIconHeight} viewBox="0 0 520 520">
        <path
          fill="currentColor"
          d="M118 171.133334L118 342.200271C118 353.766938 126.675 365.333605 141.133333 365.333605L382.634614 365.333605C394.201281 365.333605 405.767948 356.658605 405.767948 342.200271L405.767948 171.133334C405.767948 159.566667 397.092948 148 382.634614 148L141.133333 148C126.674999 148 117.999999 156.675 118 171.133334zM465.353591 413.444444L370 413.444444 370 471.222222 474.0221 471.222222C500.027624 471.222222 520.254143 451 520.254143 425L520.254143 321 462.464089 321 462.464089 413.444444 465.353591 413.444444zM471.0221 43L367 43 367 100.777778 462.353591 100.777778 462.353591 196.111111 520.143647 196.111111 520.143647 89.2222219C517.254144 63.2222219 497.027624 43 471.0221 43zM57.7900547 100.777778L153.143646 100.777778 153.143646 43 46.2320439 43C20.2265191 43 0 63.2222219 0 89.2222219L0 193.222222 57.7900547 193.222222 57.7900547 100.777778zM57.7900547 321L0 321 0 425C0 451 20.2265191 471.222222 46.2320439 471.222223L150.254143 471.222223 150.254143 413.444445 57.7900547 413.444445 57.7900547 321z"
        ></path>
      </svg>
    )
  }

  const help = {
    name: 'help',
    keyCommand: 'help',
    buttonProps: { 'aria-label': 'Get Help' },
    icon: (
      <svg viewBox="0 0 16 16" width="16px" height="16px">
        <path
          d="M8 0C3.6 0 0 3.6 0 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8Zm.9 13H7v-1.8h1.9V13Zm-.1-3.6v.5H7.1v-.6c.2-2.1 2-1.9 1.9-3.2.1-.7-.3-1.1-1-1.1-.8 0-1.2.7-1.2 1.6H5c0-1.7 1.2-3 2.9-3 2.3 0 3 1.4 3 2.3.1 2.3-1.9 2-2.1 3.5Z"
          fill="currentColor"
        />
      </svg>
    ),
    execute: (state: any, api: any) => {
      window.open('https://www.markdownguide.org/basic-syntax/', '_blank')
    },
  }

  if (!onChange) {
    return <></>
  }

  const executeCommand = (dataName: string) => {
    const element = document.querySelector(`[data-name="${dataName}"]`)
    if (!element) return
    // @ts-ignore eslint-disable-next-line
    element.click()
  }

  const menuData = [
    {
      trigger: 'Add Title / Header',
      items: [
        {
          title: 'Title 1 (H1)',
          onSelect: (event: any) => {
            executeCommand('title1')
          },
          shortcut: '⌘1',
        },
        {
          title: 'Title 2 (H2)',
          onSelect: (event: any) => {
            executeCommand('title2')
          },
          shortcut: '⌘2',
        },
        {
          title: 'Title 3 (H3)',
          onSelect: (event: any) => {
            executeCommand('title3')
          },
          shortcut: '⌘3',
        },
        {
          title: 'Title 4 (H4)',
          onSelect: (event: any) => {
            executeCommand('title4')
          },
          shortcut: '⌘4',
        },
        {
          title: 'Title 5 (H5)',
          onSelect: (event: any) => {
            executeCommand('title5')
          },
          shortcut: '⌘5',
        },
        {
          title: 'Title 6 (H6)',
          onSelect: (event: any) => {
            executeCommand('title6')
          },
          shortcut: '⌘6',
        },
      ],
    },
    {
      trigger: 'Format Text',
      items: [
        {
          title: 'Bold Text',
          onSelect: (event: any) => {
            executeCommand('bold')
          },
          shortcut: '⌘b',
        },
        {
          title: 'Italic Text',
          onSelect: (event: any) => {
            executeCommand('italic')
          },
          shortcut: '⌘i',
        },
        {
          title: 'Strikethrough Text',
          onSelect: (event: any) => {
            executeCommand('strikethrough')
          },
          shortcut: '⌘x',
        },
        {
          title: 'Quote Text',
          onSelect: (event: any) => {
            executeCommand('quote')
          },
          shortcut: '⌘q',
        },
        {
          title: 'Insert HR (Line)',
          onSelect: (event: any) => {
            executeCommand('hr')
          },
          shortcut: '⌘h',
        },
      ],
    },
    {
      trigger: 'Add List',
      items: [
        {
          title: 'Add Checklist (checkboxes)',
          onSelect: (event: any) => {
            executeCommand('checked-list')
          },
          shortcut: '⌘b',
        },
        {
          title: 'Add Ordered List (numbered)',
          onSelect: (event: any) => {
            executeCommand('ordered-list')
          },
          shortcut: '⌘i',
        },
        {
          title: 'Add Unordered List (bullets)',
          onSelect: (event: any) => {
            executeCommand('unordered-list')
          },
          shortcut: '⌘x',
        },
      ],
    },
    {
      trigger: 'Links',
      items: [
        {
          title: 'Add Hyperlink (external)',
          onSelect: (event: any) => {
            executeCommand('link')
          },
          shortcut: '⌘l',
        },
        {
          title: 'Add Document Link (internal)',
          onSelect: (event: any) => {
            executeCommand('link')
          },
          shortcut: '⌘^l',
        },
      ],
    },
    {
      trigger: 'Images',
      items: [
        {
          title: 'Add Image (url)',
          onSelect: (event: any) => {
            executeCommand('image')
          },
          shortcut: '⌘k',
        },
        {
          title: 'Add Image (browse)',
          onSelect: (event: any) => {
            executeCommand('image')
          },
          shortcut: '⌘k',
        },
      ],
    },
    {
      trigger: 'Tables',
      items: [
        {
          title: 'Add Table (1x1)',
          onSelect: (event: any) => {
            executeCommand('table')
          },
          shortcut: '⌘^1',
        },
        {
          title: 'Add Table (2x2)',
          onSelect: (event: any) => {
            executeCommand('table')
          },
          shortcut: '⌘^2',
        },
        {
          title: 'Add Table (3x3)',
          onSelect: (event: any) => {
            executeCommand('table')
          },
          shortcut: '⌘^3',
        },
        {
          title: 'Add Table (4x4)',
          onSelect: (event: any) => {
            executeCommand('table')
          },
          shortcut: '⌘^4',
        },
        {
          title: 'Add Table (5x5)',
          onSelect: (event: any) => {
            executeCommand('table')
          },
          shortcut: '⌘^5',
        },
        {
          title: 'Add Table (6x6)',
          onSelect: (event: any) => {
            executeCommand('table')
          },
          shortcut: '⌘^6',
        },
      ],
    },
    {
      trigger: 'Preview',
      items: [
        {
          title: 'None',
          onSelect: (event: any) => {
            executeCommand('edit')
          },
          shortcut: '⌘^1',
        },
        {
          title: 'Inline Preview',
          onSelect: (event: any) => {
            executeCommand('preview')
          },
          shortcut: '⌘^2',
        },
        {
          title: 'Side Preview',
          onSelect: (event: any) => {
            executeCommand('live')
          },
          shortcut: '⌘^2',
        },
        {
          title: 'Live Preview',
          onSelect: (event: any) => {
            setShowBottomPreview(!showBottomPreview)
          },
          shortcut: '⌘^2',
        },
      ],
    },
    {
      trigger: 'Help',
      items: [
        {
          title: 'Get Help',
          onSelect: (event: any) => {
            executeCommand('help')
          },
          shortcut: '⌘^h',
        },
      ],
    },
  ]

  const wrapperElement: any =
    mounted && theme && theme === 'light'
      ? { 'data-color-mode': 'light' }
      : { 'data-color-mode': 'dark' }

  return (
    <>
      <Menubar className={rootMenubarClassName}>
        {menuData.map((menu, index) => (
          <MenubarMenu key={index}>
            <MenubarTrigger className={menubarTriggerClassName}>
              {menu.trigger}
            </MenubarTrigger>
            <MenubarContent>
              {menu.items.map((item, itemIndex) => (
                <MenubarItem
                  key={itemIndex}
                  className={menubarItemClassName}
                  onSelect={item.onSelect}
                >
                  {item.title}{' '}
                  <MenubarShortcut>{item.shortcut}</MenubarShortcut>
                  
                </MenubarItem>
               
              ))}
            </MenubarContent>
            <MenubarSeparator />
          </MenubarMenu>
        ))}
      </Menubar>
      {/*@ts-ignore eslint-disable-next-line*/}
      <MDEditor
        data-color-mode={editorColorMode}
        height={mdEditorHeight}
        hideToolbar={toolbarVisible}
        toolbarBottom={true}
        value={value}
        onChange={onChange}
        extraCommands={[
          commands.divider,
          customCodeEditCommand,
          customCodeLiveCommand,
          customCodePreviewCommand,
          commands.divider,
          customFullscreenCommand,
          help,
        ]}
        commands={newCommands}
        textareaProps={{
          placeholder: 'Please enter Markdown text',
        }}
      />

      {showBottomPreview ? (
        <>
          <Label className="text-lg font-medium">Live Preview</Label>
          <div className=" border-solid border-2 border-spacing-x-4 border-gray/[0.5] dark:border-white/[0.2] border-spacing-2 shadow-md">
            <MDEditor.Markdown
              source={value}
              wrapperElement={wrapperElement}
            />
          </div>
        </>
      ) : (
        <></>
      )}
    </>
  )
}
