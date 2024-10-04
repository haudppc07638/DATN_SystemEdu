<?php

namespace App\Http\Requests\Admin;

use Illuminate\Foundation\Http\FormRequest;

class DepartmentRequest extends FormRequest
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
            'name' => 'required|string|max:100',
            'location' => 'required|string|max:255',
        ];
    }

    public function messages(): array
    {
        return [
            'name.required' => 'Tên phòng ban không được để trống !',
            'name.string' => 'Tên phòng ban phải là chuỗi !',
            'name.max' => 'Tên phòng ban không được quá 100 ký tự !',
            
            'location.required' => 'Địa điểm không được để trống !',
            'location.string' => 'Địa điểm phải là chuỗi !',
            'location.max' => 'Địa điểm không được quá 255 ký tự !',
        ];
    }
}
