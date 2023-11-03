import { expect, test } from "vitest";
import { Slug } from "./slug";

test('It should be able to be create a new Slug from text', () => {
    const slug = Slug.createFromText('Example question title')
    expect(slug.value).toEqual('example-question-title')
}) 