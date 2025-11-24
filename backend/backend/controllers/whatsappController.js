exports.sendMessage = async (req, res) => {
    try {
        const { number, message } = req.body;

        if (!number || !message) {
            return res.status(400).json({ error: "Number & message required" });
        }

        // Abhi placeholder
        return res.json({ success: true, sent_to: number, msg: message });
    } catch (err) {
        return res.status(500).json({ error: "Server error" });
    }
};
