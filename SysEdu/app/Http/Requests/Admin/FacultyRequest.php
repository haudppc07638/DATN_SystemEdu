<?php

namespace App\Http\Requests\Admin;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class FacultyRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        $faculty = $this->route('faculty');
        $facultyId = $faculty ? $faculty->id : null;

        return [
            'name' => ['required', 'string', 'max:100', Rule::unique('faculties')->ignore($facultyId)],
            'code' => ['required', 'string', 'max:20', Rule::unique('faculties')->ignore($facultyId)],
            'description' => 'required|string|max:500'
        ];
    }

    public function messages(): array
    {
        return [
            'name.required' => 'Tên khoa không được để trống !',
            'name.string' => 'Tên khoa phải là chuỗi !',
            'name.max' => 'Tên khoa không được quá 100 ký tự !',
            'name.unique'=> 'Khoa này đã tồn tại !',
            'code.required' => 'Mã khoa không được để trống !',
            'code.string' => 'Mã khoa phải là chuỗi !',
            'code.max' => 'Mã khoa không được quá 20 ký tự !',
            'code.unique' => 'Mã khoa này đã tồn tại !',
            'description.required' => 'Mô tả không được để trống !',
            'description.string' => 'Mô tả phải là chuỗi !',
            'description.max' => 'Mô tả không được quá 500 ký tự !',
        ];
    }
}
