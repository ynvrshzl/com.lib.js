/**
 * internal logic for grammatica+com.lib.js
 */

/** 
 * Type:        Toolset
 * Abstracton:  0
 * Derivedent:  Object lookup by namespace
 * Description: This is used by the core internal logic of all grambyts to access internal JS
 * Summarized:  Think of it as string interface converstion tool procedure step
 * Example:     access_point('class-name with spaces') will be converted to... "new class_name_with_spaces"
 */
function access_point(namespace){

    /** This string assumes language features; case-insensitivity, hyphens replaced by dashes */
    const a = namespace.toLowerCase().replaceAll('-', '_').trim()

}