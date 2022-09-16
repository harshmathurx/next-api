export default function handler(req,res){
    const params = req.query.params;
    res.json(params);
}