'use strict'

/**
 * The annotation registry which holds all annotations
 * which have been registered and should be used
 *
 * @author Aumard Jimmy <jimmy.aumard@gmail.com>
 */
module.exports = class Registry {

  constructor() {
    /**
     * A hash of registered annotations
     *
     * @var {Object}
     */
    this.annotations = {}
  }

  /**
   * Register an annotation path
   *
   * @param {String} path
   * @returns {void}
   */
  registerAnnotation(path, key = false) {
    const annotation = require(path)
    if(key) { 
       this.annotations[key] = annotation[key] // fix typescript require
    } else {
       this.annotations[annotation.annotation || annotation.name] = annotation
    }
  }

  /**
   * Get an annotation constructor by it's name
   *
   * @param {String} name
   * @returns {Function}
   */
  getAnnotationConstructor(name) {
    return this.annotations[name]
  }
}
