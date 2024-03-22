'use client'

import React from 'react'
import MDEditor, { ICommand, commands } from '@uiw/react-md-editor'

interface MarkdownEditorProps {
  value: any
  onChange: any
  hideToolbar: boolean
  editorHeight?: number
  iconHeight?: string
  iconWidth?: string
  className?: string
}

export const MarkdownEditor = ({
  value,
  onChange,
  hideToolbar,
  editorHeight,
  iconHeight,
  iconWidth,
  className,
  ...props
}: MarkdownEditorProps) => {
  let mdHideToolbar = false
  let mdEditorHeight = 1500 // TODO: calculate the height of the window
  let svgIconHeight = '32'
  let svgIconWidth = '32'
  if (iconHeight) {
    svgIconHeight = iconHeight
  }
  if (iconWidth) {
    svgIconWidth = iconWidth
  }
  if (editorHeight) {
    mdEditorHeight = editorHeight
  }
  if (hideToolbar) {
    mdHideToolbar = hideToolbar
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
    (item: { name: string | undefined; icon: { props: any } }) => {
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

  if (!onChange) {
    return <></>
  }

  return (
    <MDEditor
      height={mdEditorHeight}
      hideToolbar={mdHideToolbar}
      value={value}
      onChange={onChange}
      extraCommands={[
        commands.divider,
        customCodeEditCommand,
        customCodeLiveCommand,
        customCodePreviewCommand,
        commands.divider,
        customFullscreenCommand,
      ]}
      commands={newCommands}
    />
  )
}
