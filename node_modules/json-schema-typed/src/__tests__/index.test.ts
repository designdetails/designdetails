import { JSONSchemaFormat, JSONSchemaKeys, JSONSchemaType } from '../index'

test('Format', () => {
  expect(JSONSchemaFormat).toMatchSnapshot()
})

test('Keys', () => {
  expect(JSONSchemaKeys).toMatchSnapshot()
})

test('Type', () => {
  expect(JSONSchemaType).toMatchSnapshot()
})
