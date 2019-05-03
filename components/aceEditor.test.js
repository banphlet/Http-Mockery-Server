'use strict'
const React  = require("react")
const { mount } = require("enzyme")
const { expect } = require("chai")
const TextEditor = require("./aceEditor")

describe.only('aceEditor Component test', () => {
    
    it("should return aceeditor with defaults", ()=>{
        const shallowEditor = mount(<TextEditor />)

        return expect(shallowEditor.children()).to.equal()
    })

});