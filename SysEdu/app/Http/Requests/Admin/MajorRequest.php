<?php

namespace App\Http\Requests\Admin;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class MajorRequest extends FormRequest
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
        $major = $this->route('major');
        $majorId = $major ? $major->id : null;

        return [
            'name' => ['required', 'string', 'max:100',Rule::unique('majors')->ignore($majorId)],
            'faculty_id' => 'required'
        ];
    }

    public function messages(): array
    {
        return [
            'name.required' => 'Tên chuyên ngành không được để trống !',
            'name.string' => 'Tên chuyên ngành phải là 1 chuỗi !',
            'name.max' => 'Tên chuyên ngành không được quá 100 ký tự !',
            'name.unique' => 'Tên chuyên ngành đã tồn tại !',

            'faculty_id.required' => 'Vui lòng chọn khoa !',
            'faculty_id.exists' => 'Khoa không hợp lệ !',
        ];
    }
}
