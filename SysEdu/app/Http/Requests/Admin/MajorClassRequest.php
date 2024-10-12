<?php

namespace App\Http\Requests\Admin;

use Illuminate\Foundation\Http\FormRequest;

class MajorClassRequest extends FormRequest
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
        return [
            'training_system' => 'required|string|max:100|',
            'name' => 'required|string|max:10|',
            'employee_id' => $this->isMethod('patch') ? [
                'nullable',
            ] : [
                'required',
            ],
            'major_id' => 'required',
        ];
    }


    public function messages()
    {
        return [
            'training_system.required' => 'Hệ đào tạo không được để trống',
            'training_system.string' => 'Hệ đào tạo là 1 chuỗi ký tự',
            'training_system.max' => 'Hệ đào tạo không được nhập quá 100 ký tự',

            'name.required' => 'Tên lớp không được để trống',
            'name.string' => 'Tên lớp phải là 1 chuỗi ký tự',
            'name.max' => 'Tên lớp không được nhập quá 10 ký tự',

            'employee_id.required' => 'Giảng viên không được để trống',

            'major_id.required' => 'Chuyên ngành không được để trống',
        ];
    }
}
