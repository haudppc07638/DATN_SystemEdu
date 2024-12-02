<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Credit;
use Illuminate\Support\Facades\Validator;
use Inertia\Inertia;

class CreditController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        $limit = $request->input('limit', 10);
        $search = $request->input('search', '');
        $page = $request->input('page', 1);

        $credits = Credit::search($search)->latestPaginate($limit);

        return Inertia::render('Admin/Credits/Show', [
            'credits' => $credits,
            'limit' => $limit,
            'search' => $search,
            'currentPage' => $page
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return view('admin.credits.create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $data = $request->only(['price', 'vat']);
        if (empty($data['vat'])) {
            $data['vat'] = 0;
        }
        $credit = Credit::createCredit($data);
        return redirect()->route('admin.credits.index');
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        $credit = Credit::getCreditID($id);
        return view('admin.credits.edit', ['credit' => $credit]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $data = $request->only(['price', 'vat']);
        if($data['vat'] == ''){
            $data['vat'] = 0;
        }
        Credit::updateCredit($id, $data);
        return redirect()->route('admin.credits.index');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
