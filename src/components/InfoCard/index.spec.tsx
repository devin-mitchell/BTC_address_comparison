import { describe, expect, it } from "vitest";
import { InfoCard } from ".";
import { render } from '@testing-library/react'

describe('InfoCard', () => {
  it('should render properly', () => {
    const { getAllByRole, getByText } = render(<InfoCard title={'Testing Card'} value={'1234'} />)

    const textBlocks = getAllByRole('paragraph')

    expect(textBlocks).toHaveLength(2)
    expect(getByText(/Testing Card/)).toBeDefined()
    expect(getByText(/1234/)).toBeDefined()
  })
})
